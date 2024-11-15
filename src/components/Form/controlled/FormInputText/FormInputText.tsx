import {
  Controller,
  Control,
  RegisterOptions,
  FieldValues,
  Path,
} from "react-hook-form";
import { InputText } from "@/components/Form/uncontrolled/InputText/InputText";
import type { SxProps } from "@mui/system";

interface FormInputTextProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  rules?: RegisterOptions<TFieldValues>;
  label: string;
  placeholder?: string;
  required?: boolean;
  errorData?: string;
  sx?: SxProps;
  helperText?: string;
  type?: string;
}

export const FormInputText = <TFieldValues extends FieldValues>({
  name,
  control,
  rules,
  label,
  placeholder,
  required,
  errorData,
  sx,
  type,
  helperText,
}: FormInputTextProps<TFieldValues>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({
        field: { value, onChange, onBlur, ref },
        fieldState: { error },
      }) => (
        <InputText
          name={name}
          label={label}
          inputRef={ref}
          error={errorData ? errorData : error?.message}
          placeholder={placeholder}
          value={value || ""}
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          required={required}
          sx={sx}
          helperText={helperText}
        />
      )}
    />
  );
};
