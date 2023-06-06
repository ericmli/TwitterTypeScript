import React from 'react'
import { TextInput, TextError } from './styles'
import { Controller, Control } from 'react-hook-form'
import { useColorScheme } from 'react-native'

interface PropsInput {
  name: string
  control?: Control<any>
  placeholder?: string
  onSubmitEditing?: () => void
  keyboardType?: string
  message?: string
  placeholderColor?: string
  secureTextEntry?: boolean
  multiline?: boolean
}

export function Input({ name, control, onSubmitEditing, placeholder, secureTextEntry, multiline }: PropsInput) {
  const deviceTheme = useColorScheme()
  let color = ''
  if (deviceTheme === 'dark') {
    color = '#FFF'
  } else {
    color = '#000'
  }
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value }, fieldState }) => {
        return (
          <>
            <TextInput
              onChangeText={onChange}
              value={value}
              onSubmitEditing={onSubmitEditing}
              placeholderTextColor={color}
              onChange={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
              multiline={multiline}
            />
            {fieldState.error && <TextError>{fieldState?.error?.message}</TextError>}
          </>
        )
      }}
    />
  )
}
