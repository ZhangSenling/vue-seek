// 全局注册组件
// element组件按需引入
import {
  // Pagination,
  // Dialog,
  // Autocomplete,
  // Dropdown,
  // DropdownMenu,
  // DropdownItem,
  // Menu,
  // Submenu,
  // MenuItem,
  // MenuItemGroup,
  // Input,
  // InputNumber,
  // Radio,
  // RadioGroup,
  // RadioButton,
  // Checkbox,
  // CheckboxButton,
  // CheckboxGroup,
  // Switch,
  Select,
  Option,
  // OptionGroup,
  Button,
  // ButtonGroup,
  // Table,
  // TableColumn,
  // DatePicker,
  // TimeSelect,
  // TimePicker,
  // Popover,
  // Tooltip,
  // Breadcrumb,
  // BreadcrumbItem,
  // Form,
  // FormItem,
  // Tabs,
  // TabPane,
  // Tag,
  // Tree,
  // Alert,
  // Slider,
  // Icon,
  // Row,
  // Col,
  // Upload,
  // Progress,
  // Spinner,
  // Badge,
  // Card,
  // Rate,
  // Steps,
  // Step,
  // Carousel,
  // CarouselItem,
  // Collapse,
  // CollapseItem,
  // Cascader,
  // ColorPicker,
  // Transfer,
  // Container,
  // Header,
  // Aside,
  // Main,
  // Footer,
  // Timeline,
  // TimelineItem,
  // Link,
  // Divider,
  // Image,
  // Calendar,
  // Backtop,
  // PageHeader,
  // CascaderPanel,
  // Loading,
  // MessageBox,
  // Message,
  // Notification
} from 'element-ui';
import Demo from './Demo';
import QxIcon from './QxIcon';

const components = {
  Demo,
  QxIcon
};

const elementCom = {
  Button,
  Select,
  Option
};
const common = {
  install(Vue) {
    const keys = Object.keys(components);
    keys.forEach((item) => {
      Vue.component(item, components[item]);
    });
    const eleKeys = Object.keys(elementCom);
    eleKeys.forEach((ele) => {
      console.log(elementCom[ele]);
      Vue.component(elementCom[ele].name, elementCom[ele]);
    });
  }
};

export default common;
