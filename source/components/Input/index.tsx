import React from 'react'
import { View, TextInput, TextError } from './styles'
import { Controller } from 'react-hook-form'

interface PropsInput {
  name?: any
  errors?: any
  control?: any
  placeholder?: string
  onSubmitEditing?: () => void
  keyboardType?: string
  message?: string
  result: any
}

export function Input ({ name, errors, control, onSubmitEditing, placeholder, result }: PropsInput) {
  return (
    <View>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <>
              <TextInput
                onChangeText={onChange}
                value={value}
                onSubmitEditing={onSubmitEditing}
                placeholderTextColor='#252525'
                onChange={result(value)}
                onBlur={onBlur}
                placeholder={placeholder}
              />
              {errors[name] && <TextError>{errors[name].message}</TextError>}
            </>
          )
        }}
      />
    </View>
  )
}
