{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE DeriveGeneric #-}

import Web.Scotty
import Data.Aeson
import GHC.Generics

data Contact = Contact
  { name    :: String
  , email   :: String
  , message :: String
  } deriving (Show, Generic)

instance FromJSON Contact
instance ToJSON Contact

main :: IO ()
main = scotty 3000 $ do
  post "/api/contact" $ do
    contact <- jsonData :: ActionM Contact

    json $ object
      [ "status" .= ("received" :: String)
      , "handledBy" .= ("Haskell backend" :: String)
      ]
