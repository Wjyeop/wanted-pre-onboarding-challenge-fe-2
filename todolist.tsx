// @ts-check

/**
 * 할일
 * @typedef {Object} Todo
 * @property {number(required)} id - 할일 id
 * @property {string(required)} content - 할일 내용
 * @property {boolean(required)} completed - 할일 완료 여부
 * @property {string(required)} category -카테고리
 * @property {string(optional)} tag - 태그
 */

/**
 * 할일 목록
 * @type {Todo[]}
 */
const todos = [
    { id: 1, content: 'HTML', completed: false, category: 'subject' },
    { id: 2, content: 'CSS', completed: true, category: 'subject' },
    { id: 3, content: 'Javascript', completed: false, category: 'subject', tag:'languege' },
  ];