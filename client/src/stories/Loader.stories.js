import Loader from '../styles/basic/elements/Loader';
import '../main.scss';

export default {
    title: "Basic/Loader",
    component: Loader
}

const Template = ({ ...args }) => <div id="style--basic"><Loader {...args} /></div>

export const Spinner = Template.bind({})
Spinner.args = {
    type: 'spinner'
}

export const Dots = Template.bind({})
Spinner.args = {
    type: 'dots'
}