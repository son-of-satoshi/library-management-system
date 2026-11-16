import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('password123', 10);

  await prisma.user.upsert({
    where: { email: 'librarian@example.com' },
    update: {},
    create: {
      email: 'librarian@example.com',
      name: 'Librarian User',
      password: hashedPassword,
      role: 'LIBRARIAN',
    },
  } as any);

  await prisma.user.upsert({
    where: { email: 'patron@example.com' },
    update: {},
    create: {
      email: 'patron@example.com',
      name: 'Patron User',
      password: hashedPassword,
      role: 'PATRON',
    },
  } as any);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });