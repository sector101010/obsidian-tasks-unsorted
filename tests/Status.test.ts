/**
 * @jest-environment jsdom
 */
import moment from 'moment';
import { Status, StatusConfiguration } from '../src/Status';

jest.mock('obsidian');
window.moment = moment;

describe('StatusConfiguration', () => {
    function checkValidation(
        statusConfiguration: StatusConfiguration,
        expectedValid: boolean,
        expectedMessages: string[],
    ) {
        const { valid, errors } = statusConfiguration.validate();
        expect(valid).toEqual(expectedValid);
        expect(errors).toEqual(expectedMessages);
    }

    describe('validation', () => {
        it('should handle valid input correctly', () => {
            const config = new StatusConfiguration('X', 'Completed', ' ', false);
            checkValidation(config, true, []);
        });

        it('should detect too-long symbol', () => {
            const config = new StatusConfiguration('xxx', 'Completed', ' ', false);
            checkValidation(config, false, ['Symbol ("xxx") must be a single character.']);
        });
    });
});

describe('Status', () => {
    it('should initialize with valid properties', () => {
        // Arrange
        const indicator = '/';
        const name = 'In Progress';
        const next = 'x';

        // Act
        const status = new Status(new StatusConfiguration(indicator, name, next, false));

        // Assert
        expect(status).not.toBeNull();
        expect(status!.indicator).toEqual(indicator);
        expect(status!.name).toEqual(name);
        expect(status!.nextStatusIndicator).toEqual(next);
        expect(status!.isCompleted()).toEqual(false);
    });

    it('should be complete when indicator is "x"', () => {
        // Arrange
        const indicator = 'x';
        const name = 'Done';
        const next = ' ';

        // Act
        const status = new Status(new StatusConfiguration(indicator, name, next, false));

        // Assert
        expect(status).not.toBeNull();
        expect(status!.indicator).toEqual(indicator);
        expect(status!.name).toEqual(name);
        expect(status!.nextStatusIndicator).toEqual(next);
        expect(status!.isCompleted()).toEqual(true);
    });

    it('should construct a Status for unknown symbol', () => {
        // Arrange
        const indicator = 'U';

        // Act
        const status = Status.createUnknownStatus(indicator);

        // Assert
        expect(status).not.toBeNull();
        expect(status!.indicator).toEqual(indicator);
        expect(status!.name).toEqual('Unknown');
        expect(status!.nextStatusIndicator).toEqual('x');
        expect(status!.isCompleted()).toEqual(false);
    });
});
