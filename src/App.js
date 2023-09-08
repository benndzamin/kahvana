import AddUser from './components/CreateUser.js';
import ShowUser from './components/User.js';
import './App.css';

function App() {

  const data = [
    {
        id: 1,
        firstName: 'Meho',
        lastName: 'Hadžiekremćumurović',
        emailAddress: 'meho@meho.com',
        phoneNumber: '3012-4564-52',
    },{
        id: 2,
        firstName: 'Bego',
        lastName: 'Hadžić',
        emailAddress: 'bego@bego.com',
        phoneNumber: '3012-4564-87',
    },{
        id: 3,
        firstName: 'Ahmed',
        lastName: 'Osmanović',
        emailAddress: 'ahmed@ahmed.com',
        phoneNumber: '3012-4564-14',
    },{
        id: 4,
        firstName: 'Muhammed',
        lastName: 'Halilović',
        emailAddress: 'muhammed@muhammed.com',
        phoneNumber: '3012-4564-03',
    },{
        id: 5,
        firstName: 'Omer',
        lastName: 'Mujkić',
        emailAddress: 'omer@omer.com',
        phoneNumber: '3012-4564-22',
    },{
        id: 6,
        firstName: 'Benjamin',
        lastName: 'Selimović',
        emailAddress: 'benjamin@benjamin.com',
        phoneNumber: '3012-4564-00',
    },
    {
        id: 7,
        firstName: 'Džemal',
        lastName: 'Hodžić',
        emailAddress: 'dzemal@dzemal.com',
        phoneNumber: '3012-4564-99',
    },
    {
        id: 8,
        firstName: 'Emina',
        lastName: 'Kovač',
        emailAddress: 'emina@emina.com',
        phoneNumber: '3012-4564-77',
    },
    {
        id: 9,
        firstName: 'Safet',
        lastName: 'Mujagić',
        emailAddress: 'safet@safet.com',
        phoneNumber: '3012-4564-66',
    },
    {
        id: 10,
        firstName: 'Lejla',
        lastName: 'Delić',
        emailAddress: 'lejla@lejla.com',
        phoneNumber: '3012-4564-55',
    },
    {
        id: 11,
        firstName: 'Haris',
        lastName: 'Karić',
        emailAddress: 'haris@haris.com',
        phoneNumber: '3012-4564-33',
    },
    {
        id: 12,
        firstName: 'Amina',
        lastName: 'Hodžić',
        emailAddress: 'amina@amina.com',
        phoneNumber: '3012-4564-11',
    },
    {
        id: 13,
        firstName: 'Aldin',
        lastName: 'Mehić',
        emailAddress: 'aldin@aldin.com',
        phoneNumber: '3012-4564-44',
    },
    {
        id: 14,
        firstName: 'Lejla',
        lastName: 'Suljić',
        emailAddress: 'lejla@lejla.com',
        phoneNumber: '3012-4564-88',
    },
    {
        id: 15,
        firstName: 'Emir',
        lastName: 'Kadrić',
        emailAddress: 'emir@emir.com',
        phoneNumber: '3012-4564-25',
    },
    {
        id: 16,
        firstName: 'Amina',
        lastName: 'Delić',
        emailAddress: 'amina@amina.com',
        phoneNumber: '3012-4564-99',
    },
    {
        id: 17,
        firstName: 'Adnan',
        lastName: 'Mujagić',
        emailAddress: 'adnan@adnan.com',
        phoneNumber: '3012-4564-78',
    },
    {
        id: 18,
        firstName: 'Emina',
        lastName: 'Kovač',
        emailAddress: 'emina@emina.com',
        phoneNumber: '3012-4564-36',
    },
    {
        id: 19,
        firstName: 'Amar',
        lastName: 'Selimović',
        emailAddress: 'amar@amar.com',
        phoneNumber: '3012-4564-19',
    },
    {
        id: 20,
        firstName: 'Nedim',
        lastName: 'Osmanović',
        emailAddress: 'nedim@nedim.com',
        phoneNumber: '3012-4564-66',
    },
];

  return (
    <div>
      <AddUser />
      <ShowUser items={data}/>
    </div>
  );
}

export default App;
