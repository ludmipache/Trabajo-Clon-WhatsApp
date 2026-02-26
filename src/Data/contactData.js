const contacts = [
{
    id: 1,
    name: 'Harry',
    last_time_connection: '5 min',
    porfile_picture: '',
    message: [
    {
        id: 1,
        text: 'No sabes lo que paso',
        send_by_me: false,
        created_at: '',
        is_read: true
    },
    {
        id: 2,
        text: 'que paso?',
        send_by_me: true,
        created_at: '',
        is_read: true
    }
    ]
},
{
    id: 2,
    name: 'Hermione',
    last_time_connection: '10 min',
    porfile_picture: '',
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
    id: 3,
    name: 'Ron',
    last_time_connection: 'Ayer',
    porfile_picture: '',
    message: [
    {
        id: 1,
        text: 'Che, jugamos al ajedrez?',
        send_by_me: false,
        created_at: '',
        is_read: false
    }
    ]
}
]

export default contacts