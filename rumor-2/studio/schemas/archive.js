export default {
    name: 'config',
    type: 'document',
    title: 'Config',
    // __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
    fields: [  
        {
            name: 'about',
            title: 'About Text',
            type: 'blockContent'
        },
        {
            name: 'submit',
            title: 'Submit Text',
            type: 'blockContent'
        }
    ]
}
