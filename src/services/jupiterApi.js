// Jupiter Lend API Integration
const JUPITER_API_URL = 'https://lite-api.jup.ag/lend/v1/earn/tokens';
const USDC_MINT_ADDRESS = 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v';

// Mock data fallback
const MOCK_VAULT_DATA = {
  name: 'USDC Lending Pool',
  apr: 12.5,
  liquidity: '$2.5M',
  mintAddress: USDC_MINT_ADDRESS,
  apy: 13.2
};

export const fetchUSDCVaultData = async () => {
  try {
    const response = await fetch(JUPITER_API_URL);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Filter for USDC vault
    const usdcVault = data.find(vault => vault.mintAddress === USDC_MINT_ADDRESS);
    
    if (!usdcVault) {
      console.warn('USDC vault not found in Jupiter API response');
      return MOCK_VAULT_DATA;
    }
    
    return usdcVault;
  } catch (error) {
    console.error('Error fetching Jupiter vault data:', error);
    return MOCK_VAULT_DATA;
  }
};

export default {
  fetchUSDCVaultData
};
