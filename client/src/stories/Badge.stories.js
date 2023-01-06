import Badge from '../styles/basic/elements/Badge';
import '../main.scss';

export default {
    title: "Basic/Badge",
    component: Badge,
    argTypes: {
        text: { type: "string", defaultValue: 'Header' }
    }
}

const Template = ({ text, ...args }) => <div id="style--basic"><Badge {...args} >{text}</ Badge></div>

export const HeaderBadge = Template.bind({})
HeaderBadge.args = {
    badgeText: "New",
    type: "h1"
}

export const PillBadge = Template.bind({})
PillBadge.args = {
    badgeText: 'New',
    pill: true,
    type: 'h1'
}

export const LightBadge = Template.bind({})
LightBadge.args = {
    badgeText: 'New',
    light: true,
    type: 'h1'
}

export const ButtonBadge = Template.bind({})
ButtonBadge.args = {
    badgeText: '43',
    round: true,
    light: true,
    type: 'button'
}