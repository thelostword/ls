/*
 * @Author: thelostword
 * @Date: 2022-09-22 18:31:24
 * @LastEditors: thelostword
 * @LastEditTime: 2022-11-14 15:22:06
 * @FilePath: \ls\example\main.ts
 */
import './main.css';
import * as ls from "../src/main";

ls.customConfig({
  prefix: 'EXAMPLE_',
  secret: '01221ecd'
});

function setupOnSet() {
  const setKey = document.querySelector<HTMLInputElement>('#setKey');
  const setValue = document.querySelector<HTMLInputElement>('#setValue');
  const setExpires = document.querySelector<HTMLInputElement>('#setExpires');
  const setIsEncry = document.querySelector<HTMLInputElement>('#setIsEncry');
  const setConfirm = document.querySelector<HTMLButtonElement>('#setConfirm');
  
  setConfirm?.addEventListener('click', () => {
    const key = setKey?.value;
    const value = setValue?.value;
    if (!key) {
      alert('请输入KEY');
      return;
    }
    if (!value) {
      alert('请输入VALUE');
      return;
    }
    ls.set(key, value, {
      encrypt: !!setIsEncry!.checked,
      expires: setExpires?.value ? Number(setExpires?.value) : 0,
    })
  })
}

function setupOnGet() {
  const getKey = document.querySelector<HTMLInputElement>('#getKey');
  const getValue = document.querySelector<HTMLTextAreaElement>('#getValue');
  const getOptionalAll = document.querySelector<HTMLInputElement>('#getOptionalAll');
  const getConfirm = document.querySelector<HTMLButtonElement>('#getConfirm');

  getConfirm?.addEventListener('click', () => {
    const key = getKey?.value;
    if (!key) {
      alert('请输入KEY');
      return;
    }
    const value = JSON.stringify(ls.get(key, {
      type: 'localStorage',
      isRaw: !!getOptionalAll?.checked,
    }));
    getValue!.value = value;
  })
}

setupOnSet()
setupOnGet()
