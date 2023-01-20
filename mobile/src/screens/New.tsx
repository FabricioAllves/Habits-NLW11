import { useState } from "react";
import { ScrollView, View, Text, TextInput, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'

import { BackButton } from "../components/BackButton";
import { CheckBox } from "../components/CheckBox";
import colors from "tailwindcss/colors";

const avaliableWeekDays = ['Domingo', 'Seugunda-feira', 'Terça-feira', 'Quarta-feira', 'Sexta-feira', 'Sábado']

export function New() {
  const [weekDays, setWeekDays] = useState<number[]>([]);

  function handleToggleWeekDays(weekDayIndex: number) {
    if (weekDays.includes(weekDayIndex)) {
      setWeekDays(oldValueState => oldValueState.filter(weekDay => weekDay !== weekDayIndex))
    } else {
      setWeekDays(oldValueState => [...oldValueState, weekDayIndex])
    }
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >

        <BackButton />

        <Text className="mt-6 text-white font-extrabold text-3xl">
          Criar hábito
        </Text>

        <Text className="mt-6 text-white font-extrabold text-base">
          Qual seu comprometimento
        </Text>

        <TextInput
          className="h-12 pl-4 rounded-lg mt-3 bg-zinc-900 text-white border-2 border-zinc-800 focus:border-green-600"
          placeholder="Exercícios, dormir bem, etc..."
          placeholderTextColor={colors.zinc[400]}
        />

        <Text className="font-semibold mt-4 mb-3 text-white">
          Qual a reconrrência?
        </Text>

        {
          avaliableWeekDays.map((weekDay, index) => (
            <CheckBox
              key={weekDay}
              title={weekDay}
              checked={weekDays.includes(index)}
              onPress={() => handleToggleWeekDays(index)}
            />
          ))
        }

        <TouchableOpacity
          className="flex-row w-full h-14 items-center justify-center bg-green-600 rounded-lg mt-6"
          activeOpacity={0.7}
        >
          <Feather
            name="check"
            size={20}
            color={colors.white}
          />

          <Text className="font-semibold text-base text-white ml-2">
            Confirmar
          </Text>
        </TouchableOpacity>


      </ScrollView>
    </View>
  )
}