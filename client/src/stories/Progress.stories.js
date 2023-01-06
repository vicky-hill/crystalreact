import Progress from '../styles/basic/elements/Progress';
import '../main.scss';

export default {
    title: "Basic/Progress",
    component: Progress
}

const Template = ({ ...args }) => <div id="style--basic"><Progress {...args} /></div>

export const Text = Template.bind({})
Text.args = {
    progress: 36
}

export const Small = Template.bind({})
Small.args = {
    progress: 36,
    small: true
}