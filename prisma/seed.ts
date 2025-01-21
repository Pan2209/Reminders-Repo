import { Importance, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const post1 = await prisma.reminder.upsert({
where:{title:'Ir a ver pastillas'},
update:{},
create:{
    title: "Ir a ver Pastillas",
    reminder: "Debes ir a ver las pastillas de Rivastigmina, son unas pastillas azules pequeñitas que tomas todos los días a las 2 pm",
    note: "Trata de ser puntual, al doctor le molestan los impuntuales",
    minute: 20,
    hour: 13,
    day:9,
    month:1,
    year:2025,
    status: false,
    importance: "Normal",
     }
    }
)}

main()
    .catch((e) => {
        console.log(e);
        process.exit(1);
    })
    .finally(async () =>{
        await prisma.$disconnect();
    });