import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUserDetails = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user.id },
  });

  if (!user) return res.status(404).json({ error: "User not found" });

  res.json(user);
};
