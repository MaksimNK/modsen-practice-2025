import { FC } from "react"
import { BackButton, NotFoundMessage, NotFoundPageContainer, NotFoundTitle } from "./styled"
import { useNavigate } from "react-router"

export const NotFound: FC = () => {

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <NotFoundPageContainer>
            <NotFoundTitle>NotFound - 404</NotFoundTitle>
            <NotFoundMessage>
                The page you are looking for does not exist.
            </NotFoundMessage>
            <BackButton onClick={handleGoBack}>Go Back</BackButton>
        </NotFoundPageContainer>
    )
}
