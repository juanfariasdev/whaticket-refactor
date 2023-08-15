import GetDefaultWhatsApp from '../../helpers/GetDefaultWhatsApp';
import { getWbot } from '../../libs/wbot';

const CheckContactNumber = async (number: string): Promise<string | null> => {
	const defaultWhatsapp = await GetDefaultWhatsApp();

	const wbot = getWbot(defaultWhatsapp.id);

	const validNumber = await wbot.getNumberId(`${number}@c.us`);

	if (validNumber) return validNumber.user;
	return null;
};

export default CheckContactNumber;
