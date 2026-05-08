import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import AppFooter from '../AppFooter.vue';

// Mock vue-i18n
const t = (key: string) => key;
const $t = vi.fn(t);

describe('AppFooter.vue', () => {
  it('renders footer brand name', () => {
    const wrapper = mount(AppFooter, {
      global: {
        mocks: {
          $t
        },
        stubs: {
          'router-link': true
        }
      },
    });

    expect(wrapper.text()).toContain('FUNDUZ');
  });

  it('renders footer description from i18n', () => {
    const wrapper = mount(AppFooter, {
      global: {
        mocks: {
          $t
        },
        stubs: {
          'router-link': true
        }
      },
    });

    expect(wrapper.text()).toContain('footer.description');
  });

  it('renders all section titles', () => {
    const wrapper = mount(AppFooter, {
      global: {
        mocks: {
          $t
        },
        stubs: {
          'router-link': true
        }
      },
    });

    expect(wrapper.text()).toContain('footer.projects_title');
    expect(wrapper.text()).toContain('footer.company_title');
    expect(wrapper.text()).toContain('footer.legal_title');
  });
});
