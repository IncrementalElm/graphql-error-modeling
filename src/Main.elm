module Main exposing (main)

import Api.Enum.DiscountErrorReason as DiscountErrorReason exposing (DiscountErrorReason)
import Api.Object.DiscountedLookupError
import Api.Object.DiscountedProductInfo
import Api.Query as Query
import Api.Union.DiscountedProductInfoOrError
import Browser
import Graphql.Document as Document
import Graphql.Http
import Graphql.Operation exposing (RootQuery)
import Graphql.OptionalArgument exposing (OptionalArgument(..))
import Graphql.SelectionSet as SelectionSet exposing (SelectionSet, hardcoded, with)
import Helpers.Main
import RemoteData exposing (RemoteData)


type alias Response =
    Result DiscountErrorReason Int



-- List String
-- Int


query : SelectionSet Response RootQuery
query =
    Query.discountOrError { discountCode = "asdf" }
        (Api.Union.DiscountedProductInfoOrError.fragments
            { onDiscountedLookupError =
                Api.Object.DiscountedLookupError.reason
                    |> SelectionSet.map Err
            , onDiscountedProductInfo =
                Api.Object.DiscountedProductInfo.discountedPrice
                    |> SelectionSet.map Ok
            }
        )


nonTypesafeErrorSelection =
    Query.discount { discountCode = "asdf" }
        Api.Object.DiscountedProductInfo.discountedPrice


unionSelection =
    Query.discountOrError { discountCode = "merryxmas2018" }
        (Api.Union.DiscountedProductInfoOrError.fragments
            { onDiscountedLookupError = Api.Object.DiscountedLookupError.reason |> SelectionSet.map Err
            , onDiscountedProductInfo = Api.Object.DiscountedProductInfo.discountedPrice |> SelectionSet.map Ok
            }
        )


makeRequest : Cmd Msg
makeRequest =
    query
        |> Graphql.Http.queryRequest "http://localhost:4000/"
        |> Graphql.Http.send (RemoteData.fromResult >> GotResponse)



-- Elm Architecture Setup


type Msg
    = GotResponse Model


type alias Model =
    RemoteData (Graphql.Http.Error Response) Response


type alias Flags =
    ()


init : Flags -> ( Model, Cmd Msg )
init _ =
    ( RemoteData.Loading, makeRequest )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        GotResponse response ->
            ( response, Cmd.none )


main : Helpers.Main.Program Flags Model Msg
main =
    Helpers.Main.document
        { init = init
        , update = update
        , queryString = Document.serializeQuery query
        }
