import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { SearchInput } from "./SearchInput";

export default {
  title: "Design System/Input/SearchInput",
  component: SearchInput,
  decorators: [
    (Story) => (
      <div style={{ width: "100%", maxWidth: "250px", margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof SearchInput>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof SearchInput> = (args) => {
  return <SearchInput {...args} />;
};

export const InputExample = Template.bind({});
InputExample.storyName = "SearchInput";
InputExample.args = {};
