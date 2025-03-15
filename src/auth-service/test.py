import requests

def test_token_generation():

    keycloak_url = "http://localhost:8080/realms/devrealm/protocol/openid-connect/token"
    client_id = "auth-service"
    client_secret = "tL6eofTjou7G0HOsJevRRX5DS3qKtdOt"
    username = "swaroop"
    password = "swaroop"  


    headers = {
        "Content-Type": "application/x-www-form-urlencoded"
    }


    data = {
        "client_id": client_id,
        "client_secret": client_secret,
        "username": username,
        "password": password,
        "grant_type": "password"
    }

    try:
        response = requests.post(keycloak_url, headers=headers, data=data)
        response.raise_for_status() 
        
        token_data = response.json()
        
        if "access_token" in token_data:
            print("✅ Token generation successful!")
            print(f"Access Token: {token_data['access_token']}...")  # Print first 50 chars
            print(f"Expires In: {token_data['expires_in']} seconds")
            return True
        else:
            print("Token missing in response")
            print(f"Response: {token_data}")
            return False

    except requests.exceptions.RequestException as e:
        print(f" Request failed: {str(e)}")
        if hasattr(e, 'response') and e.response is not None:
            print(f"HTTP Status Code: {e.response.status_code}")
            print(f"Error Response: {e.response.text}")
        return False

if __name__ == "__main__":
    success = test_token_generation()
