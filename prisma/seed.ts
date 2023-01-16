import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const post1 = await prisma.user.upsert({
        where: {name: 'Shota Nukumizu'}, // データベースを設置する場所
        update: {}, // データ更新をする必要がないのでとりあえず保留
        // データの中身を設計する
        create: {
            name: 'Shota Nukumizu',
            description: 'A programmer'
        },
    })

    const post2 = await prisma.user.upsert({
        where: {name: 'Furukawa Shuntaro'},
        update: {},
        create: {
            name: 'Furukawa Shuntaro',
            description: 'The President of Nintendo'
        }
    })

    console.log({post1, post2})
}

main()
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })