// const db = require('../modeles');
// async function seedData(){
//     await db.sequelize.sync({force: true});

//     const institutionTypes = await db.InstitutionType.bulkCreate([

//         // Institution type
//         {name:'Playhouse'},
//         {name: 'School'},
//         {name:'College'},
//         {name:'Competitive Exam Center'}
//     ]);
//     // Board
//     await db.Board.bulkCreate([
//         {name: 'GSAB'},
//         {name: 'CBSE'}
//     ]);

//     // Class categories

//     await db.ClassCategory.bulkCreate([
//         {name: 'English'},
//         {name:'Hindi'},
//         {name:'Gujarati'}
//     ])

//     // Standards
//     await db.Standard.bulkCreate([
//         {name:'LKG'},
//         {name:'HKG'}
//     ]);

//     // Subjects
//     await db.Subject.bulkCreate([
//         {name:'Math'},
//         {name:'Science'},
//         {name:'English'}
//     ]);
//     // University Degree
//     await db.UniversityDegree.bulkCreate([
//         {name:'Bachelor'},
//         {name:'Master'}
//     ])

//     // Exam Types
//     await db.ExamType.bulkCreate([
//         {name: 'NEET'},
//         {name: 'JEE'}
//     ])

//     console.log('Seed data inserted successfully');
//     process.exit();
    
// }

// seedData().catch(err =>{
//     console.log('seeding failed', err);
//     process.exit();
    
// })