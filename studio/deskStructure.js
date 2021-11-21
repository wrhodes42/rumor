import S from '@sanity/desk-tool/structure-builder'

const hiddenDocTypes = (listItem) =>
    ![
        'config',        
    ].includes(listItem.getId())

export default () =>
    S.list()
        .title('Menu')
        .items([
            S.listItem()
                .id('config')
                .title('Config')
                .child(
                    S.editor()
                        .title('Config')
                        .schemaType('config')
                        .documentId('config')
                ),                           
            ...S.documentTypeListItems().filter(hiddenDocTypes),
        ])


// export default () =>
//     // S.list()
//     //     .title(title)
//     //     .items([
//     //         S.listItem()
//     //             .id('dev')
//     //             .title('dashboard')
//     //             .showIcon(false)
//     //             .child(
//     //                 S.editor()
//     //                     .title('dev')
//     //                     .schemaType('dev')
//     //                     .documentId('dev')
//     //             )            
               

//     //     ])
//     // ),               
//     ...S.documentTypeListItems().filter(hiddenDocTypes),
// ])