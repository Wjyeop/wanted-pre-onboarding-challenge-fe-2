// @ts-check

/**
 * 할일
 * @typedef {Object} Todo
 * @property {int(11)} id - 할일 id
 * @property {varchar(256)} contents - 할일 내용
 * @property {boolean} completed - 할일 완료 여부
 * @property {varchar(20)} category -카테고리
 * @property {JSON} tags - 태그
 */

/**
 * 할일 목록
 * @type {Todos(JSON)}
 */
const todos = [
    { id: 1, content: 'HTML', completed: false, contents:'', category: 'subject' },
    { id: 2, content: 'CSS', completed: true, contents:'', category: 'subject' },
    { id: 3, content: 'Javascript', completed: false, contents:'', category: 'subject', tags:'languege' },
  ];