const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const count = await prisma.lead.count();
  console.log('lead count:', count);
  await prisma.$disconnect();
}

main().catch(e => {
  console.error('ERROR', e);
  prisma.$disconnect();
  process.exit(1);
});