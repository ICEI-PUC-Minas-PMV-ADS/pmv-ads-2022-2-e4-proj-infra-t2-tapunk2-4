import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Constants from 'expo-constants';

import Container from '../componentes/Container';
import Input from '../componentes/Input';
export default function Sobre() {
  return (
    <Container>
      <SafeAreaView style={styles.corpo}>
        <ScrollView style={styles.scrollView}>
          <Animatable.Image
            animation="flipInY"
            source={require('../assents/Translucida.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <Input>
            <Text>
              Airsoft é um esporte de simulação de combates de guerra, que se
              originou através de um grupo de pessoas em 1970 no Japão. A
              modalidade inicialmente era voltada para tiro ao alvo. Conforme o
              tempo passou, ganhou as formas de combate e simulação. (PERON,
              2017).{'\n'}
              No Brasil, a modalidade chegou somente no início dos anos 2000,
              devido ao preconceito embutido no uso de armas. Por suas armas
              serem réplicas de armas de fogo famosas, só foi começar a ser
              reconhecida em 2003, regulamentada e regulariza, veio apenas em
              dezembro de 2007.Hoje em dia, é uma modalidade bem reconhecida e
              com fãs pelo mundo todo, tanto oriente quanto ocidente. (DUWE,
              2020).{'\n'}
              Porém, ainda existe um grande caminho para divulgar e abrir a
              mente das pessoas para esse esporte. Airsoft é um esporte que
              desenvolve nos praticantes várias qualidades físicas e
              intelectuais, muito foco, honra e princípios. As armas são muito
              semelhantes às reais, porém elas são réplicas externas de armas de
              fogo reais só que seu mecanismo interno em nada se assemelha com
              elas, sendo impossível qualquer conversão das armas de Airsoft
              para o uso com munição real, elas funcionam através de pressão e a
              munição são projéteis plásticos não letais, bolinhas de plástico
              conhecidas como “bbs” com cerca de 6 mm de diâmetro (QG Airsoft).
              {'\n'}
              Os membros das equipes se vestem com uniformes militares sempre
              deixando o ambiente o mais realista possível e assim atiram nos
              adversários em busca de objetivo, no Brasil o Airsoft é
              regulamentado pelo Exército Brasileiro e a ponta laranja nas armas
              é uma exigência em todos os equipamentos. Para que o jogo
              funcione, o atingido tem que ser honesto, admitir o tiro que levou
              e sair da partida, reforçando assim o conceito de fair play. No
              início do jogo é importante que o jogador ou operador saiba
              exatamente o tipo de partida que está participando. (PERON, 2017).
              {'\n'}A legislação brasileira não é clara a respeito de qual seria
              o ambiente ideal para a prática do Airsoft, podemos citar como
              local ideal matas fechadas, florestas e trilhas. Nessas áreas, os
              jogadores devem estar preparados para todo tipo de situação
              imprevista. A prática também é possível em instalações urbanas:
              galpões, fábricas e prédios abandonados, entre outros. Esses,
              ambientes oferecem muitas possibilidades de esconderijo. (DUWE,
              2020).
              {'\n'}
              Podemos observar que existem diversas opiniões sobre a prática
              desse esporte. Desde aquelas que se identificam e investem no
              esporte, como os que gostariam de iniciar, porém ficam receosos
              devido ao preconceito gerado em cima do esporte. O fato de não
              existir uma fonte de informação confiável, legislação, direito e
              deveres dos praticantes do esporte deixam as pessoas sem um norte
              inicial e muito veem o esporte como algo ilegal. A existência de
              uma Plataforma/confiável que busque integrar os praticantes do
              esporte poderia ser algo que ajude os praticantes de Airsoft
              mostrassem para as demais pessoas que o Airsoft se trata de um
              esporte assim como o futebol.
            </Text>
          </Input>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

const styles = StyleSheet.create({
  corpo: {
    flex: 1,
    backgroundColor: '#f0870c',
  },
  scrollView: {
    backgroundColor: '#f0870c',
    marginHorizontal: 10,
  },
  image: {
    paddingTop: 30,
    alignItems: 'center',
    backgroundColor: '#f0870c',
    width: 300,
    height: 180,
  },
});
