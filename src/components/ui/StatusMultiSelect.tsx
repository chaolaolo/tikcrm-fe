import React, { useState } from 'react';
import Select, { components, type MultiValue } from 'react-select';
import { BiX, BiChevronDown, BiCheck } from 'react-icons/bi';

const options = [
    { value: 'UP COMING', label: 'UP COMING' },
    { value: 'ONGOING', label: 'ONGOING' },
    { value: 'EXPIRED', label: 'EXPIRED' },
    { value: 'DEACTIVATED', label: 'DEACTIVATED' },
];

const customStyles = {
    control: (provided: any, state: any) => ({
        ...provided,
        borderRadius: '0.375rem',
        minHeight: '40px',
        boxShadow: state.isFocused ? '0 0 0 0.2rem rgba(13,110,253,.25)' : undefined,
        borderColor: state.isFocused ? '#86b7fe' : '#ced4da',
        cursor: 'pointer',
    }),
    option: (provided: any, state: any) => ({
        ...provided,
        backgroundColor: state.isSelected
            ? '#e9f3ff'
            : state.isFocused
                ? '#f1f1f1'
                : 'white',
        fontWeight: state.isSelected ? 'bold' : 'normal',
    }),
    multiValue: (provided: any) => ({
        ...provided,
        backgroundColor: '#e9ecef',
        borderRadius: '8px',
        padding: '2px 6px',
    }),
    multiValueLabel: (provided: any) => ({
        ...provided,
        fontWeight: 600,
    }),
    multiValueRemove: (provided: any, state: any) => ({
        ...provided,
        backgroundColor: state.isFocused ? '#d1e7dd' : 'transparent', // ✅ Màu nền khi hover
        color: state.isFocused ? '#0f5132' : '#000',                  // ✅ Màu icon x khi hover
        borderRadius: '4px',
        ':hover': {
            backgroundColor: 'transparent',
            color: 'blue',
        },
    }),
    input: (provided: any) => ({
        ...provided,
        textAlign: 'left', // ✅ căn trái placeholder
    }),
    placeholder: (provided: any) => ({
        ...provided,
        textAlign: 'left', // ✅ căn trái placeholder
    }),
};

const CustomOption = (props: any) => {
    const { isSelected, label } = props;
    return (
        <components.Option {...props}>
            <div className="d-flex justify-content-between align-items-center">
                <span style={{ color: isSelected ? '#0d6efd' : 'inherit', fontWeight: isSelected ? 600 : 400 }}>
                    {label}
                </span>
                {isSelected && <BiCheck className="text-primary" />}
            </div>
        </components.Option>
    );
};


const DropdownIndicator = (props: any & { isHovered: boolean }) => {
    const {
        selectProps: { value, clearValue }, isHovered
    } = props;

    return (
        <components.DropdownIndicator {...props}>
            {isHovered && value.length > 0 ? (
                <BiX size={20} onClick={clearValue} style={{ cursor: 'pointer' }} />
            ) : (
                <BiChevronDown size={20} />
            )}
        </components.DropdownIndicator>
    );
};

const StatusMultiSelect: React.FC = () => {
    const [selected, setSelected] = useState<MultiValue<{ label: string; value: string }>>([]);
    // const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="col-md"
        // onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
        >
            <Select
                isMulti
                options={options}
                value={selected}
                onChange={setSelected}
                placeholder="All Statuses"
                styles={customStyles}
                closeMenuOnSelect={false}
                hideSelectedOptions={false}
                components={{
                    DropdownIndicator,
                    IndicatorSeparator: () => null,
                    ClearIndicator: () => null,
                    Option: CustomOption,
                }}
                // isHovered={isHovered}
                // clearValue={() => setSelected([])}
                noOptionsMessage={() => 'No matching status'}
            />
        </div>
    );
};

export default StatusMultiSelect;
