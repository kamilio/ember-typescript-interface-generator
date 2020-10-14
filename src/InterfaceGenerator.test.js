import { parseComponent } from './InterfaceGenerator';

describe('parseComponent', () => {
  test('basic', () => {
    const hbs = '<Component @random="true" />'
    expect(parseComponent(hbs)).toEqual([{
      id: 0,
      name: 'random',
      type: 'string'
    }])
  });

  test('ignores the html attributes', () => {
    const hbs = '<Component class="hello" @random="true" />'
    expect(parseComponent(hbs)).toEqual([{
      id: 0,
      name: 'random',
      type: 'string'
    }])
  });

  test('detects functions when starts with on', () => {
    const hbs = '<Component @onTest={{this.something}} />'
    expect(parseComponent(hbs)).toEqual([{
      id: 0,
      name: 'onTest',
      type: 'function'
    }])
  });

  test('it handles whitespace', () => {
    const hbs = `
    <PowerSelect
    @disabled={{@isLoading}}
  >
    `
    expect(parseComponent(hbs)).toEqual([{
      id: 0,
      name: 'disabled',
      type: 'string'
    }])
  });

  test('handles as |something|', () => {
    const hbs = `
    <PowerSelect
    @disabled={{@isLoading}}
    as |user|
  >
    `
    expect(parseComponent(hbs)).toEqual([{
      id: 0,
      name: 'disabled',
      type: 'string'
    }])
  });

  test('it handles complex case', () => {
    const hbs = `
    <PowerSelect
    @disabled={{@isLoading}}
    @onChange={{@onAdd}}
    @options={{@users}}
    @placeholder={{if @isLoading "Loading users..." "Choose users..."}}
    @searchEnabled={{true}}
    @searchField="name"
    as |user|
  >
    `
    expect(parseComponent(hbs)).toBeTruthy();
  });
});