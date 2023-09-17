import React from 'react';
import { SectionList, Text, View, StyleSheet, SafeAreaView } from 'react-native';

const style = StyleSheet.create({
  row: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  name: {
    fontSize: 16,
  },
  separator: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 1,
  },
  sectionHeader: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'rgb(170,170,170)',
  },
});

const groupPeopleByLastName = (_data) => {
  const data = [..._data];
  const groupedData = data.reduce((accumulator, item) => {
    const group = item.name.last[0].toUpperCase();
    if (accumulator[group]) {
      accumulator[group].data.push(item);
    } else {
      accumulator[group] = {
        title: group,
        data: [item],
      };
    }
    return accumulator;
  }, {});
  const sections = Object.keys(groupedData).map((key) => {
    return groupedData[key];
  });
  return sections.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    }
    return -1;
  });
};

const bt8 = () => {
  const PEOPLE = [
    {
      name: {
        title: 'Ms',
        first: 'Maeva',
        last: 'Scott',
      },
    },
    {
      name: {
        title: 'Ms',
        first: 'Maeva',
        last: 'Scott',
      },
    },
    {
      name: {
        title: 'Ms',
        first: 'Maeva',
        last: 'Scott',
      },
    },
    {
        name: {
            title: 'Ms',
            first: 'Maeva1',
            last: 'Scott',
          },
    },
  ];

  return (
    <SafeAreaView>
      <SectionList
        sections={groupPeopleByLastName(PEOPLE)}
        keyExtractor={(item) => `${item.name.first}-${item.name.last}`}
        renderSectionHeader={({ section }) => {
          return (
            <View style={style.sectionHeader}>
              <Text>{section.title}</Text>
            </View>
          );
        }}
        renderItem={({ item }) => {
          return (
            <View style={style.row}>
              <Text style={style.name}>
                {item.name.first} {item.name.last}
              </Text>
            </View>
          );
        }}
        ItemSeparatorComponent={() => <View style={style.separator} />}
      />
    </SafeAreaView>
  );
};

export default bt8;
