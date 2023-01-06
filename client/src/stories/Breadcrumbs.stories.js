import Breadcrumbs from '../styles/basic/elements/Breadcrumbs';
import '../main.scss';

export default {
    title: "Basic/Breadcrumbs",
    component: Breadcrumbs,
    argTypes: {
        numberOfChildren: { type: "number", defaultValue: 3 }
    }
}

const Template = ({ numberOfChildren, ...args }) => (
    <div id="style--basic">
        <Breadcrumbs {...args}>
            {[...Array(numberOfChildren).keys()].map((child, i, a) => <Breadcrumbs.Item active={i === a.length - 1}>Link {child + 1}</Breadcrumbs.Item>)}
        </Breadcrumbs>
    </div>
)

export const Slash = Template.bind({})
Slash.args = {}

export const Caret = Template.bind({})
Caret.args = {
    separator: 'caret'
}



