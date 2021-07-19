import '@testing-library/jest-dom/extend-expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { setLevel, levels } from 'loglevel';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(process.env as any).TEST_BUILD = true;
setLevel(levels.SILENT);

// Mock react-redux hooks
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

configure({ adapter: new Adapter() });
