import Progress from '../components/elements/Progress';
import '../main.scss';

export default {
    title: "Components/Progress",
    component: Progress
}

const Template = ({ ...args }) => <Progress {...args} />

export const Text = Template.bind({})
Text.args = {
    progress: 36
}

export const Small = Template.bind({})
Small.args = {
    progress: 36,
    small: true
}