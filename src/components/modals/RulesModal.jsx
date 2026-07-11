import { Modal } from "../ui/Modal/Modal.jsx";

export function RulesModal({ closeModal }) {
  return (
    <Modal closeModal={closeModal}>
      <div className="rules">
        <div>
          Этот сайт создан, чтобы подсчитывать очки в настольной игре эрудит.
        </div>

        <div>Как пользоваться:</div>

        <ol className='rules__list'>
          <li>Добавьте игроков</li>
          <li>Введите слово, которое вы собрали на доске</li>
          <li>
            Примените бонусы за буквы:
            <ul className='rules__sublist'>
              <li className='rules__subitem'>
                серая кнопка: буква не добавляет очков, т.к. уже была засчитана
                в этот ход
              </li>
              <li className='rules__subitem'>зеленая кнопка: умножает очки за букву на 2</li>
              <li className='rules__subitem'>желтая кнопка: умножает очки за букву на 3</li>
            </ul>
          </li>
          <li>
            Примените бонусы за слово*:
            <ul className='rules__sublist'>
              <li className='rules__subitem'>синяя кнопка: умножает очки за слово на 2</li>
              <li className='rules__subitem'>красная кнопка: умножает очки за слово на 3</li>
              <li className='rules__subitem'>
                кнопка «все буквы»: выберите, если потратили все 7 букв за ход.
                Это добавит вам 15 очков
              </li>
            </ul>
          </li>
          <li>
            Выберите игрока и нажмите кнопку «Подсчет». Баллы будут добавлены
            выбранному игроку
          </li>
        </ol>

        <div>
          По стрелке в карточке игрока вы сможете увидеть все составленные им
          слова. Если нужно удалить слово — нажмите крестик рядом с ним
        </div>
        <div>Хорошей игры!</div>
        <div>
          *по умолчанию за слова из пяти букв и больше вы получаете
          <span> 10 дополнительных баллов</span>
        </div>
      </div>
    </Modal>
  );
}
