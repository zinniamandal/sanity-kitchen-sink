export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5febce3decca6147587ec143',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-hvssbhfr',
                  apiId: 'b167a79e-d395-423b-8879-9a3dc999461c'
                },
                {
                  buildHookId: '5febce3db41d9d36c1f8ad34',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-fh5ybifo',
                  apiId: 'e37ef7c5-ffcb-4193-85ef-c7ad6c1ce864'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zinniamandal/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-fh5ybifo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
