'use strict';
const form = document.querySelector('#inquiry-form');
const result = document.querySelector('#result');
const product = document.querySelector('#product');
document.querySelectorAll('[data-product]').forEach(button => button.addEventListener('click', () => {
  product.value = button.dataset.product;
  form.hidden = false;
  result.hidden = true;
  document.querySelector('#inquiry').scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
  product.focus({preventScroll:true});
}));
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const name = document.querySelector('#name').value.trim();
  const description = document.querySelector('#project').value.trim();
  if (!name || !description) return;
  document.querySelector('#acknowledgment').textContent = `Demo acknowledgment: Thanks, ${name}. In an activated system, your inquiry about ${product.value.toLowerCase()} would be recorded for the team to review.`;
  document.querySelector('#message').textContent = `Hello Ace Windows & Hardware. My name is ${name}. I am interested in ${product.value}.\n\n${description}\n\nPlease confirm available options, specifications and a quote.`;
  document.querySelector('#lead-product').textContent = `Product: ${product.value}`;
  document.querySelector('#lead-name').textContent = `Name: ${name}`;
  form.hidden = true;
  result.hidden = false;
  result.setAttribute('tabindex','-1');
  result.focus({preventScroll:true});
});
document.querySelector('#edit').addEventListener('click', () => {
  result.hidden = true;
  form.hidden = false;
  document.querySelector('#name').focus({preventScroll:true});
});
