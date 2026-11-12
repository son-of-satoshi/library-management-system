// api/prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Clean up existing data to prevent unique constraint errors on re-run
  await prisma.review.deleteMany();
  await prisma.book.deleteMany();
  await prisma.genre.deleteMany();
  await prisma.user.deleteMany();

  // 1. Create Users with Role Enum
  const adminUser = await prisma.user.create({
    data: {
      email: 'librarian@library.com',
      name: 'Chief Librarian',
      role: 'LIBRARIAN',
    },
  });

  const patronUser = await prisma.user.create({
    data: {
      email: 'patron@student.com',
      name: 'Kiptoo Brian',
      role: 'PATRON',
    },
  });

  // 2. Create at least 4 Genres (Core Requirement)
  const fiction = await prisma.genre.create({
    data: { name: 'Fiction', slug: 'fiction' },
  });

  const technology = await prisma.genre.create({
    data: { name: 'Technology', slug: 'technology' },
  });

  const history = await prisma.genre.create({
    data: { name: 'History', slug: 'history' },
  });

  const science = await prisma.genre.create({
    data: { name: 'Science', slug: 'science' },
  });

  // 3. Create at least 15 Books distributed across genres (Core Requirement)
  const booksData = [
    // Fiction (4 books)
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '978-0061120084', totalCopies: 5, availableCopies: 5, genreId: fiction.id },
    { title: '1984', author: 'George Orwell', isbn: '978-0451524935', totalCopies: 4, availableCopies: 4, genreId: fiction.id },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isbn: '978-0743273565', totalCopies: 3, availableCopies: 3, genreId: fiction.id },
    { title: 'Pride and Prejudice', author: 'Jane Austen', isbn: '978-0141439518', totalCopies: 6, availableCopies: 6, genreId: fiction.id },

    // Technology (4 books)
    { title: 'Clean Code', author: 'Robert C. Martin', isbn: '978-0132350884', totalCopies: 4, availableCopies: 4, genreId: technology.id },
    { title: 'The Pragmatic Programmer', author: 'Andrew Hunt & David Thomas', isbn: '978-0201616224', totalCopies: 5, availableCopies: 5, genreId: technology.id },
    { title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', isbn: '978-1449373328', totalCopies: 3, availableCopies: 3, genreId: technology.id },
    { title: 'Introduction to Algorithms', author: 'Thomas H. Cormen', isbn: '978-0262033848', totalCopies: 2, availableCopies: 2, genreId: technology.id },

    // History (4 books)
    { title: 'Sapiens: A Brief History of Humankind', author: 'Yuval Noah Harari', isbn: '978-0062316097', totalCopies: 5, availableCopies: 5, genreId: history.id },
    { title: 'Guns, Germs, and Steel', author: 'Jared Diamond', isbn: '978-0393317558', totalCopies: 3, availableCopies: 3, genreId: history.id },
    { title: 'A People s History of the United States', author: 'Howard Zinn', isbn: '978-0062397348', totalCopies: 4, availableCopies: 4, genreId: history.id },
    { title: 'The Silk Roads', author: 'Peter Frankopan', isbn: '978-1101946337', totalCopies: 3, availableCopies: 3, genreId: history.id },

    // Science (4 books)
    { title: 'A Brief History of Time', author: 'Stephen Hawking', isbn: '978-0553380163', totalCopies: 4, availableCopies: 4, genreId: science.id },
    { title: 'Cosmos', author: 'Carl Sagan', isbn: '978-0345539434', totalCopies: 5, availableCopies: 5, genreId: science.id },
    { title: 'The Selfish Gene', author: 'Richard Dawkins', isbn: '978-0199291151', totalCopies: 3, availableCopies: 3, genreId: science.id },
    { title: 'Astrophysics for People in a Hurry', author: 'Neil deGrasse Tyson', isbn: '978-0393609393', totalCopies: 6, availableCopies: 6, genreId: science.id },
  ];

  for (const book of booksData) {
    await prisma.book.create({ data: book });
  }

  // 4. Stretch Requirement: Create a sample Review
  const sampleBook = await prisma.book.findFirst();
  if (sampleBook) {
    await prisma.review.create({
      data: {
        rating: 5,
        comment: 'An absolute masterpiece! Highly recommended.',
        bookId: sampleBook.id,
        userId: patronUser.id,
      },
    });
  }

  console.log('✅ Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });