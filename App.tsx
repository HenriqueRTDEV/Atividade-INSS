
import './global.css';

import { StatusBar } from 'expo-status-bar';
import { Alert, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  // Mensagem simples para demonstrar que os botões funcionam
  function clicar(nome: string) {
    Alert.alert(nome, 'Opção selecionada com sucesso!');
  }

  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <StatusBar style="light" backgroundColor="#1e40af" translucent={false} />

      {/* Cabeçalho */}
      <View className="flex-row items-center justify-between bg-blue-800 p-4">

        <Pressable onPress={() => clicar('Menu')}>
          <Text className="text-2xl text-white">☰</Text>
        </Pressable>

        <Text className="text-2xl font-bold text-white">
          Meu INSS
        </Text>

        <View className="flex-row gap-4">
          <Pressable onPress={() => clicar('Pesquisar')}>
            <Text className="text-xl">🔍</Text>
          </Pressable>

          <Pressable onPress={() => clicar('Perfil')}>
            <Text className="text-xl">👤</Text>
          </Pressable>
        </View>
      </View>

      <ScrollView className="flex-1">
        <View className="p-5">

          {/* 1: Diminuí o espaço entre a saudação e os serviços,
              aproveitando melhor o espaço da tela. */}
          <Text className="text-lg text-slate-700">
            Olá, Henrique!
          </Text>

          <Text className="mt-1 text-2xl font-bold text-slate-900">
            Como podemos ajudar?
          </Text>

          <Text className="mt-1 text-slate-500">
            Escolha um dos serviços abaixo.
          </Text>

          <Text className="mb-3 mt-6 text-xl font-bold text-slate-900">
            Serviços para você
          </Text>

          {/* 2: Organizei os serviços em uma única coluna,
              facilitando a visualização das opções. */}
          <View className="gap-3">

            {/* 3: Mantive os nomes completos dos serviços,
                evitando textos cortados e dúvidas sobre as opções. */}

            <Pressable
              onPress={() => clicar('Extratos e comprovantes')}
              className="flex-row items-center rounded-xl bg-white p-4"
            >
              <Text className="mr-4 text-3xl">📁</Text>
              <View className="flex-1">
                <Text className="text-base font-bold text-slate-900">
                  Extratos e comprovantes
                </Text>
                <Text className="text-sm text-slate-500">
                  Consulte seus documentos.
                </Text>
              </View>
              <Text className="text-xl text-blue-800">›</Text>
            </Pressable>

            <Pressable
              onPress={() => clicar('Extrato de contribuição')}
              className="flex-row items-center rounded-xl bg-white p-4"
            >
              <Text className="mr-4 text-3xl">📄</Text>
              <View className="flex-1">
                <Text className="text-base font-bold text-slate-900">
                  Extrato de contribuição
                </Text>
                <Text className="text-sm text-slate-500">
                  Consulte suas contribuições.
                </Text>
              </View>
              <Text className="text-xl text-blue-800">›</Text>
            </Pressable>

            <Pressable
              onPress={() => clicar('Benefícios')}
              className="flex-row items-center rounded-xl bg-white p-4"
            >
              <Text className="mr-4 text-3xl">❤️</Text>
              <View className="flex-1">
                <Text className="text-base font-bold text-slate-900">
                  Benefícios
                </Text>
                <Text className="text-sm text-slate-500">
                  Consulte seus benefícios.
                </Text>
              </View>
              <Text className="text-xl text-blue-800">›</Text>
            </Pressable>

            <Pressable
              onPress={() => clicar('Novo pedido')}
              className="flex-row items-center rounded-xl bg-white p-4"
            >
              <Text className="mr-4 text-3xl">➕</Text>
              <View className="flex-1">
                <Text className="text-base font-bold text-slate-900">
                  Novo pedido
                </Text>
                <Text className="text-sm text-slate-500">
                  Faça uma nova solicitação.
                </Text>
              </View>
              <Text className="text-xl text-blue-800">›</Text>
            </Pressable>

            <Pressable
              onPress={() => clicar('Mais serviços')}
              className="flex-row items-center rounded-xl bg-white p-4"
            >
              <Text className="mr-4 text-3xl">⋯</Text>
              <View className="flex-1">
                <Text className="text-base font-bold text-slate-900">
                  Mais serviços
                </Text>
                <Text className="text-sm text-slate-500">
                  Veja outras opções disponíveis.
                </Text>
              </View>
              <Text className="text-xl text-blue-800">›</Text>
            </Pressable>

          </View>

          {/* 4: Aumentei o espaçamento interno dos serviços
              para facilitar a leitura e o toque nos itens. */}

          <Pressable
            onPress={() => clicar('Atendimento')}
            className="mt-6 rounded-xl bg-white p-5"
          >
            <Text className="text-lg font-bold text-slate-900">
              Precisa de ajuda?
            </Text>

            <Text className="mt-2 text-slate-600">
              Converse com a assistente virtual do INSS.
            </Text>

            <Text className="mt-3 font-bold text-blue-800">
              Iniciar atendimento →
            </Text>
          </Pressable>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}