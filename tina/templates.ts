import type { TinaField } from "tinacms";
export function defaultFields() {
  return [
    {
      // Template for the body of each page
      type: "rich-text",
      name: "body",
      label: "Body of Document",
      description: "This is the markdown body",
      isBody: true,
      templates: [
        {
          // Custom tag "note", used to show the banner for important info
          // use it like {{< note title="Note" >}} .... {{</note >}}
          name: 'note',
          label: 'banner', // Name of the tag
          match: {
            // Delimiters of the tag
            start: '{{<',
            end: '>}}',
          },
          fields: [ // List of fields editable for a note
            {
              name: 'title',
              label: 'Title', // Title shown in the banner
              type: 'string',
              required: true,
              ui: {
                component: 'text', // The edit of the title is a simple text input
              },
            },
            {
              name: 'children',
              label: 'Content', // Content of the banner
              type: 'rich-text', // The edit of the content is a complete text editor
              required: true
            },
          ],
        },
      ],
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
      required: true,
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "type",
      label: "Type",
    },
    {
      type: "string",
      name: "weight",
      label: "Weight",
      required: true,
    },
  ] as TinaField[];
}
