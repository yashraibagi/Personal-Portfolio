import { Router, type IRouter } from "express";
import { db, contactMessagesTable } from "@workspace/db";
import { SubmitContactBody } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  const parseResult = SubmitContactBody.safeParse(req.body);

  if (!parseResult.success) {
    res.status(400).json({ success: false, error: "Invalid input data" });
    return;
  }

  try {
    const { name, email, message } = parseResult.data;

    const [inserted] = await db
      .insert(contactMessagesTable)
      .values({ name, email, message })
      .returning({ id: contactMessagesTable.id });

    res.status(201).json({
      success: true,
      message: "Thank you for reaching out! I'll get back to you soon.",
      id: inserted.id,
    });
  } catch (err) {
    req.log.error({ err }, "Failed to save contact message");
    res.status(500).json({ success: false, error: "Failed to submit message" });
  }
});

export default router;
