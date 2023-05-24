import React from 'react'
import { View, TextInput, TextError } from './styles'
import { Controller, Control } from 'react-hook-form'

interface PropsInput {
  name: string
  control?: Control<any>
  placeholder?: string
  onSubmitEditing?: () => void
  keyboardType?: string
  message?: string
  placeholderColor?: string
  secureTextEntry?: boolean
}

export function Input ({ name, control, onSubmitEditing, placeholder, secureTextEntry }: PropsInput) {
  return (
    <View>
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
                placeholderTextColor='#252525'
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
              />
              {fieldState.error && <TextError>{fieldState?.error?.message}</TextError>}
            </>
          )
        }}
      />
    </View>
  )
}
