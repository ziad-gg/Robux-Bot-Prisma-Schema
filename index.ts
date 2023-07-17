import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  
//   const Guild = await prisma.guilds.create({ data: { id: '1' } });
//   const User = await prisma.user.create({ data: { id: '1', username: 'ziad' } });
//   await prisma.guilds.update({ where: Guild, data: { users: { create: { id: User.id } } } });

    const User = await prisma.guildUser.findFirst({ where: { id: '1', guildId: '1' } });
    
    console.log(User)

}


main().catch(async (e) => {
    console.error(e)
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect()
})