export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
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
                  buildHookId: '62ca962c07746f17575547f4',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-184n3f47',
                  apiId: 'be6ef15f-d42a-4988-abb8-712d66d1f57c'
                },
                {
                  buildHookId: '62ca962c2db9041b77a848fb',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-m1idz26i',
                  apiId: 'f0497af9-3402-40cd-babd-432f7cc6aa6c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Abduljelil32/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-m1idz26i.netlify.app', category: 'apps'}
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
