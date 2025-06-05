// Storybook story for FirstPost component
import FirstPost from '../pages/posts/first-post.js'; // Added .js extension

export default {
  title: 'Blog/FirstPost',
  component: FirstPost,
  parameters: {
    // Apply a layout that's suitable for page components
    layout: 'fullscreen',
  },
  tags: ['autodocs'], // Enable automatic documentation generation
};

// Default story for the FirstPost component
export const Default = {
  render: () => <FirstPost />,
};