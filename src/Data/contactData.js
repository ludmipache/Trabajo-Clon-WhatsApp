import NevillePhoto from '../assets/imagenes/Neville.jpg'
import HarryPhoto from '../assets/imagenes/harry.jpg'
import HermionePhoto from '../assets/imagenes/Hermione.jpg'
import RonPhoto from '../assets/imagenes/Ronald.jpg'
import LunaPhoto from '../assets/imagenes/luna.jpg'
import FredPhoto from '../assets/imagenes/fred.jpg'
import GeorgePhoto from '../assets/imagenes/george.jpg'
import DracoPhoto from '../assets/imagenes/Draco.jpg'


const contacts = [
{
    id: 1,
    name: 'Neville',
    last_time_connection: '12:35',
    porfile_picture: NevillePhoto,
    message: [
    {
        id: 1,
        text: 'Necesitas ayuda con herbologia?',
        send_by_me: false,
        created_at: '12:35',
        is_read: false
    }
    ]
},
{
    id: 2,
    name: 'Harry',
    last_time_connection: '12:30',
    porfile_picture: HarryPhoto,
    message: [
    {
        id: 1,
        text: 'No sabes lo que paso',
        send_by_me: false,
        created_at: '10:30',
        is_read: true
    },
    {
        id: 2,
        text: 'que paso?',
        send_by_me: true,
        created_at: '12:30',
        is_read: true
    }
    ]
},
{
    id: 3,
    name: 'Hermione',
    last_time_connection: '12:20',
    porfile_picture: HermionePhoto,
    message: [
    {
        id: 1,
        text: 'Estudiaste para el examen?',
        send_by_me: false,
        created_at: '',
        is_read: true
    }
    ]
},
{
    id: 4,
    name: 'Fred o George',
    last_time_connection: '11:40',
    porfile_picture: FredPhoto,
    message: [
    {
        id: 1,
        text: 'Queres probar unos dulces nuevos?',
        send_by_me: false,
        created_at: '11:40',
        is_read: false
    }
    ]
},
{
    id: 5,
    name: 'El otro',
    last_time_connection: '11:39',
    porfile_picture: GeorgePhoto,
    message: [
    {
        id: 1,
        text: 'Vamos al lago?',
        send_by_me: false,
        created_at: '11:39',
        is_read: true
    },
    {
        id: 2,
        text: 'Dale, voy en 5',
        send_by_me: true,
        created_at: '11:39',
        is_read: true
    },
    {
        id: 3,
        text: 'llevo calderos de chocolates',
        send_by_me: true,
        created_at: '11:39',
        is_read: true
    }
    ]
},
{
    id: 6,
    name: 'Ron',
    last_time_connection: 'Ayer',
    porfile_picture: RonPhoto,
    message: [
    {
        id: 1,
        text: 'Che, jugamos al ajedrez?',
        send_by_me: false,
        created_at: '',
        is_read: true
    }
    ]
},
{
    id: 7,
    name: 'Draco',
    last_time_connection: 'Ayer',
    porfile_picture:DracoPhoto,
    message: [
    {
        id: 1,
        text: 'No sabes lo que hizo Potter ahora!',
        send_by_me: false,
        created_at: '19:56',
        is_read: true
    },
    {
        id: 2,
        text: 'porque tan obsesionado con el?',
        send_by_me: true,
        created_at: '20:00',
        is_read: true
    }
    ]
},
{
    id: 8,
    name: 'Luna',
    last_time_connection: 'Ayer',
    porfile_picture: LunaPhoto,
    message: [
    {
        id: 1,
        text: 'Viste mis Zapatillas?',
        send_by_me: false,
        created_at: '14:20',
        is_read: true
    },
    {
        id: 2,
        text: 'No, pero si queres te ayudo a buscarlas',
        send_by_me: true,
        created_at: '14:20',
        is_read: true
    },
    {
        id: 3,
        text: 'Gracias, sospecho que los nargles tuvieron algo que ver',
        send_by_me: false,
        created_at: '14:22',
        is_read: true
    },
    {
        id: 4,
        text: 'Si seguro',
        send_by_me: true,
        created_at: '14:23',
        is_read: true
    }
    ]
},
]

export default contacts