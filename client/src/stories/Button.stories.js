import '../main.scss';
import Button from '../components/elements/Button';

export default {
    title: "Button",
    component: Button,
    argTypes: {
        buttonLabel: { type: "string", defaultValue: 'Button' }
    }
}

const Template = ({ buttonLabel, ...args }) => <Button {...args}>{ buttonLabel }</Button>


export const Primary = Template.bind({})
Primary.args = {
    variant: 'primary',
    buttonLabel: 'Primary Button'
}