// shortcut with widgets assigned
import { JsonForm } from './lib/components/JsonForm';
// main export
import { widgets } from './lib/widgets/index';
// widgets
import { ArrayWidget, ArrayWidgetPlugin, ArrayOptions } from './lib/widgets/arraywidget/ArrayWidget';
import { BooleanWidget, BooleanWidgetPlugin, BooleanOptions, booleanDefaultOptions } from './lib/widgets/booleanwidget/BooleanWidget';
import { ColorWidget, ColorWidgetPlugin, ColorOptions } from './lib/widgets/colorwidget/ColorWidget';
import { DateWidget, DateWidgetPlugin, DateOptions } from './lib/widgets/datewidget/DateWidget';
import { FileWidget, FileWidgetPlugin, FileOptions } from './lib/widgets/filewidget/FileWidget';
import { NavigationWidget, NavigationOptions } from './lib/widgets/navigationwidget/NavigationWidget';
import { NullWidget, NullWidgetPlugin, NullOptions } from './lib/widgets/nullwidget/NullWidget';
import { NumberWidget, NumberWidgetPlugin, NumberOptions } from './lib/widgets/numberwidget/NumberWidget';
import { ObjectWidget, ObjectWidgetPlugin, ObjectOptions } from './lib/widgets/objectwidget/ObjectWidget';
import { SelectOneOfWidget, SelectOneOfWidgetPlugin } from './lib/widgets/selectoneofwidget/SelectOneOfWidget';
import {
    SelectMultipleWidget,
    SelectMultipleWidgetPlugin,
    SelectMultipleOptions
} from './lib/widgets/selectmultiplewidget/SelectMultipleWidget';
import { StringWidget, StringWidgetPlugin, StringOptions } from './lib/widgets/stringwidget/StringWidget';
import { SelectWidget, SelectWidgetPlugin, SelectOptions } from './lib/widgets/selectwidget/SelectWidget';
import { SimpleJsonWidget, SimpleJsonWidgetPlugin, SimpleJsonOptions } from './lib/widgets/simplejsonwidget/SimpleJsonWidget';
import { UnknownWidget, UnknownWidgetPlugin } from './lib/widgets/unknownwidget/UnknownWidget';
import { TextWidget, TextWidgetPlugin, TextOptions } from './lib/widgets/textwidget/TextWidget';
import { TagListWidget, TagListWidgetPlugin, TagListOptions } from './lib/widgets/taglistwidget/TagListWidget';
// components
import { Button, ButtonProps, ButtonControlled, ButtonControlledProps } from './lib/components/button/Button';
import { Checkbox, CheckboxProps } from './lib/components/checkbox/Checkbox';
import { ColorInput, ColorInputProps } from './lib/components/colorinput/ColorInput';
import { DateInput, type DateInputProps } from './lib/components/dateinput/DateInput';
import { DatePicker, type DatePickerProps } from './lib/components/datepicker/DatePicker';
import { TagList, type TagListProps } from './lib/components/taglist/TagList';
import { TagListInput, type TagListInputProps } from './lib/components/taglistinput/TagListInput';
import { FileField, FileFieldProps } from './lib/components/filefield/FileField';
import { Icon, IconProps } from './lib/components/icon/Icon';
import { StringInput, StringInputProps } from './lib/components/input/StringInput';
import { TimeInput, TimeInputProps } from './lib/components/timeinput/TimeInput';
import { NumberInput, NumberInputProps } from './lib/components/input/NumberInput';
import { Label, LabelProps } from './lib/components/label/Label';
import { useModal, UseModalProps, Modal, ModalProps } from './lib/components/modal/Modal';
import { usePopover, UsePopoverProps, Popover, PopoverProps } from './lib/components/popover/Popover';
import {
    SectionHeader,
    SectionHeaderLabel,
    SectionHeaderLabelProps
} from './lib/components/sectionheader/SectionHeader';
import { Select, SelectProps } from './lib/components/select/Select';
import {
    SingleSelectOptions,
    MultiSelectOptions,
    SelectOptionProps,
    SelectOptionsControlled,
    SelectOptionsControlledProps
} from './lib/components/selectoptions/SelectOptions';
import { Switch, SwitchProps } from './lib/components/switch/Switch';
import { TextArea, TextAreaProps } from './lib/components/textarea/TextArea';
import { Theme, ThemeProps } from './lib/components/theme/Theme';
import { useTooltip, UseTooltipProps, Tooltip, TooltipProps } from './lib/components/tooltip/Tooltip';
import { WidgetDescription, WidgetDescriptionProps } from './lib/components/widgetdescription/WidgetDescription';
import { WidgetError, WidgetErrorProps } from './lib/components/widgeterror/WidgetError';
import { WidgetField, WidgetFieldProps, WidgetFieldHeaderProps } from '@sagold/react-json-editor';

export default widgets;
export {
    // all widgets
    widgets,
    // widgets
    ArrayOptions,
    ArrayWidget,
    ArrayWidgetPlugin,
    BooleanOptions,
    booleanDefaultOptions,
    BooleanWidget,
    BooleanWidgetPlugin,
    ColorOptions,
    ColorWidget,
    ColorWidgetPlugin,
    DateOptions,
    DateWidget,
    DateWidgetPlugin,
    FileOptions,
    FileWidget,
    FileWidgetPlugin,
    NavigationOptions,
    NavigationWidget,
    NullOptions,
    NullWidget,
    NullWidgetPlugin,
    NumberOptions,
    NumberWidget,
    NumberWidgetPlugin,
    ObjectOptions,
    ObjectWidget,
    ObjectWidgetPlugin,
    SelectMultipleOptions,
    SelectMultipleWidget,
    SelectMultipleWidgetPlugin,
    SelectOneOfWidget,
    SelectOneOfWidgetPlugin,
    SelectOptions,
    SelectWidget,
    SelectWidgetPlugin,
    SimpleJsonOptions,
    SimpleJsonWidget,
    SimpleJsonWidgetPlugin,
    StringOptions,
    StringWidget,
    StringWidgetPlugin,
    TagListOptions,
    TagListWidget,
    TagListWidgetPlugin,
    TextOptions,
    TextWidget,
    TextWidgetPlugin,
    UnknownWidget,
    UnknownWidgetPlugin,
    // components
    Button,
    ButtonControlled,
    Checkbox,
    ColorInput,
    DateInput,
    DatePicker,
    FileField,
    Icon,
    JsonForm,
    Label,
    Modal,
    MultiSelectOptions,
    NumberInput,
    Popover,
    SectionHeader,
    SectionHeaderLabel,
    Select,
    SelectOptionsControlled,
    SingleSelectOptions,
    StringInput,
    Switch,
    TagList,
    TagListInput,
    TextArea,
    TimeInput,
    Theme,
    Tooltip,
    useModal,
    usePopover,
    useTooltip,
    WidgetDescription,
    WidgetError,
    WidgetField
};

export type {
    ButtonControlledProps,
    ButtonProps,
    CheckboxProps,
    ColorInputProps,
    DateInputProps,
    DatePickerProps,
    FileFieldProps,
    IconProps,
    LabelProps,
    ModalProps,
    NumberInputProps,
    PopoverProps,
    SectionHeaderLabelProps,
    SelectOptionProps,
    SelectOptionsControlledProps,
    SelectProps,
    StringInputProps,
    SwitchProps,
    TagListProps,
    TagListInputProps,
    TextAreaProps,
    ThemeProps,
    TimeInputProps,
    TooltipProps,
    UseModalProps,
    UsePopoverProps,
    UseTooltipProps,
    WidgetDescriptionProps,
    WidgetErrorProps,
    WidgetFieldHeaderProps,
    WidgetFieldProps
};
