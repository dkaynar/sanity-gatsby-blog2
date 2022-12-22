export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "63a441f4fb6de80fb509c69e",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-2-studio-m36w2sj2",
                  apiId: "9f3ef4eb-ce0e-48b2-b2d0-da3830af968a",
                },
                {
                  buildHookId: "63a441f4fb6de80fb509c69f",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-2-web-j4ekx52u",
                  apiId: "d1fc9d85-da2f-4bf6-b410-d46b84daba49",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/dkaynar/sanity-gatsby-blog2",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-2-web-j4ekx52u.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
